<?php

declare(strict_types=1);

$I = new AcceptanceTester($scenario);
$I->wantTo('see medium cross link footer when rmcl is deactivated');

$I->loginAsAdmin();
$I->amOnPluginsPage();
$I->deactivatePlugin('remove-medium-cross-links');

$I->amOnpage('/2017/01/11/acceptance-test-for-rmcl/');
$I->see('Also published on Medium.');
