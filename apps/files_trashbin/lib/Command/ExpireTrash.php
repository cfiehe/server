<?php
/**
 * SPDX-FileCopyrightText: 2019-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud GmbH.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OCA\Files_Trashbin\Command;

use OCA\Files_Trashbin\Expiration;
use OCA\Files_Trashbin\Helper;
use OCA\Files_Trashbin\Trashbin;
use OCP\IUser;
use OCP\IUserManager;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ExpireTrash extends Command {

	/**
	 * @var Expiration
	 */
	private $expiration;

	/**
	 * @var IUserManager
	 */
	private $userManager;

	/**
	 * @param IUserManager|null $userManager
	 * @param Expiration|null $expiration
	 */
	public function __construct(?IUserManager $userManager = null,
		?Expiration $expiration = null) {
		parent::__construct();

		$this->userManager = $userManager;
		$this->expiration = $expiration;
	}

	protected function configure() {
		$this
			->setName('trashbin:expire')
			->setDescription('Expires the users trashbin')
			->addArgument(
				'user_id',
				InputArgument::OPTIONAL | InputArgument::IS_ARRAY,
				'expires the trashbin of the given user(s), if no user is given the trash for all users will be expired'
			);
	}

	protected function execute(InputInterface $input, OutputInterface $output): int {
		$maxAge = $this->expiration->getMaxAgeAsTimestamp();
		if (!$maxAge) {
			$output->writeln('Auto expiration is configured - keeps files and folders in the trash bin for 30 days and automatically deletes anytime after that if space is needed (note: files may not be deleted if space is not needed)');
			return 1;
		}

		$users = $input->getArgument('user_id');
		if (!empty($users)) {
			foreach ($users as $user) {
				if ($this->userManager->userExists($user)) {
					$output->writeln("Remove deleted files of   <info>$user</info>");
					$userObject = $this->userManager->get($user);
					$this->expireTrashForUser($userObject);
				} else {
					$output->writeln("<error>Unknown user $user</error>");
					return 1;
				}
			}
		} else {
			$p = new ProgressBar($output);
			$p->start();
			$this->userManager->callForSeenUsers(function (IUser $user) use ($p) {
				$p->advance();
				$this->expireTrashForUser($user);
			});
			$p->finish();
			$output->writeln('');
		}
		return 0;
	}

	public function expireTrashForUser(IUser $user) {
		$uid = $user->getUID();
		if (!$this->setupFS($uid)) {
			return;
		}
		$dirContent = Helper::getTrashFiles('/', $uid, 'mtime');
		Trashbin::deleteExpiredFiles($dirContent, $uid);
	}

	/**
	 * Act on behalf on trash item owner
	 * @param string $user
	 * @return boolean
	 */
	protected function setupFS($user) {
		\OC_Util::tearDownFS();
		\OC_Util::setupFS($user);

		// Check if this user has a trashbin directory
		$view = new \OC\Files\View('/' . $user);
		if (!$view->is_dir('/files_trashbin/files')) {
			return false;
		}

		return true;
	}
}
