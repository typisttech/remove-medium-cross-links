<?php
$I = new AcceptanceTester($scenario);
$I->wantTo('see medium cross link footer when rmcl is deactivated');

$I->loginAsAdmin();
$I->amOnPluginsPage();
$I->deactivatePlugin('remove-medium-cross-links');

$I->amOnpage('/');
$I->waitForElement('p.site-description', 10);
$I->scrollTo([ 'css' => 'h2.entry-title' ]);

$I->click('Acceptance Test for rmcl');

$I->see('Also published on Medium.');
