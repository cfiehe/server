<?php
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCA\Theming\Tests\Service;

use OC\Route\Router;
use OCA\Theming\ImageManager;
use OCA\Theming\ITheme;
use OCA\Theming\Themes\DyslexiaFont;
use OCA\Theming\ThemingDefaults;
use OCA\Theming\Util;
use OCP\App\IAppManager;
use OCP\Files\IAppData;
use OCP\ICacheFactory;
use OCP\IConfig;
use OCP\IL10N;
use OCP\IRequest;
use OCP\IURLGenerator;
use OCP\IUserSession;
use PHPUnit\Framework\MockObject\MockObject;
use Test\TestCase;

class DyslexiaFontTest extends TestCase {
	/** @var ThemingDefaults|MockObject */
	private $themingDefaults;
	/** @var IUserSession|MockObject */
	private $userSession;
	/** @var IURLGenerator|MockObject */
	private $urlGenerator;
	/** @var ImageManager|MockObject */
	private $imageManager;
	/** @var IConfig|MockObject */
	private $config;
	/** @var IL10N|MockObject */
	private $l10n;
	/** @var IAppManager|MockObject */
	private $appManager;

	private DyslexiaFont $dyslexiaFont;

	protected function setUp(): void {
		$this->themingDefaults = $this->createMock(ThemingDefaults::class);
		$this->userSession = $this->createMock(IUserSession::class);
		$this->imageManager = $this->createMock(ImageManager::class);
		$this->config = $this->createMock(IConfig::class);
		$this->l10n = $this->createMock(IL10N::class);
		$this->appManager = $this->createMock(IAppManager::class);

		$util = new Util(
			$this->config,
			$this->appManager,
			$this->createMock(IAppData::class),
			$this->imageManager
		);

		$userSession = $this->createMock(IUserSession::class);
		$cacheFactory = $this->createMock(ICacheFactory::class);
		$request = $this->createMock(IRequest::class);
		$router = $this->createMock(Router::class);
		$this->urlGenerator = new \OC\URLGenerator(
			$this->config,
			$userSession,
			$cacheFactory,
			$request,
			$router
		);

		$this->themingDefaults
			->expects($this->any())
			->method('getColorPrimary')
			->willReturn('#0082c9');

		$this->themingDefaults
			->expects($this->any())
			->method('getDefaultColorPrimary')
			->willReturn('#0082c9');

		$this->themingDefaults
			->expects($this->any())
			->method('getColorBackground')
			->willReturn('#0082c9');

		$this->themingDefaults
			->expects($this->any())
			->method('getDefaultColorBackground')
			->willReturn('#0082c9');

		$this->l10n
			->expects($this->any())
			->method('t')
			->willReturnCallback(function ($text, $parameters = []) {
				return vsprintf($text, $parameters);
			});

		$this->dyslexiaFont = new DyslexiaFont(
			$util,
			$this->themingDefaults,
			$this->userSession,
			$this->urlGenerator,
			$this->imageManager,
			$this->config,
			$this->l10n,
			$this->appManager,
			null,
		);

		parent::setUp();
	}


	public function testGetId() {
		$this->assertEquals('opendyslexic', $this->dyslexiaFont->getId());
	}

	public function testGetType() {
		$this->assertEquals(ITheme::TYPE_FONT, $this->dyslexiaFont->getType());
	}

	public function testGetTitle() {
		$this->assertNotEmpty($this->dyslexiaFont->getTitle());
	}

	public function testGetEnableLabel() {
		$this->assertNotEmpty($this->dyslexiaFont->getEnableLabel());
	}

	public function testGetDescription() {
		$this->assertNotEmpty($this->dyslexiaFont->getDescription());
	}

	public function testGetMediaQuery() {
		$this->assertEquals('', $this->dyslexiaFont->getMediaQuery());
	}

	public function testGetCSSVariables() {
		$this->assertStringStartsWith('OpenDyslexic', $this->dyslexiaFont->getCSSVariables()['--font-face']);
	}

	public function dataTestGetCustomCss() {
		return [
			['', true],
			['', false],
			['/subfolder', true],
			['/subfolder', false],
		];
	}

	/**
	 * @dataProvider dataTestGetCustomCss
	 *
	 * Ensure the fonts are always loaded from the web root
	 * despite having url rewriting enabled or not
	 *
	 * @param string $webRoot
	 * @param bool $prettyUrlsEnabled
	 */
	public function testGetCustomCss($webRoot, $prettyUrlsEnabled) {
		\OC::$WEBROOT = $webRoot;
		$this->config->expects($this->any())
			->method('getSystemValue')
			->with('htaccess.IgnoreFrontController', false)
			->willReturn($prettyUrlsEnabled);

		$this->assertStringContainsString("'$webRoot/apps/theming/fonts/OpenDyslexic-Regular.otf'", $this->dyslexiaFont->getCustomCss());
		$this->assertStringNotContainsString('index.php', $this->dyslexiaFont->getCustomCss());
	}
}
