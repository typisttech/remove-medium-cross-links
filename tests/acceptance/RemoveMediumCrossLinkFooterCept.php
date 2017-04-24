<?php

declare(strict_types=1);

$I = new AcceptanceTester($scenario);
$I->wantTo('test medium cross link footer is removed');

$I->amOnpage('/2017/01/11/acceptance-test-for-rmcl/');
$I->dontSee('Also published on Medium.');
