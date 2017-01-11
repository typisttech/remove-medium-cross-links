<?php
$I = new AcceptanceTester($scenario);
$I->wantTo('test medium cross link footer is removed');

$I->amOnpage('/');
$I->click('Acceptance Test for rmcl');

$I->dontSee('Also published on Medium.');
