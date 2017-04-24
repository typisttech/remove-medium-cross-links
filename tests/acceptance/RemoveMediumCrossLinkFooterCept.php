<?php

declare(strict_types=1);

$I = new AcceptanceTester($scenario);
$I->wantTo('test medium cross link footer is removed');

$I->amOnpage('/');
$I->waitForElement('p.site-description', 10);
$I->scrollTo([
    'css' => 'h2.entry-title',
]);

$I->click('Acceptance Test for rmcl');

$I->dontSee('Also published on Medium.');
