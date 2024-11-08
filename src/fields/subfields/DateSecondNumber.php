<?php
namespace verbb\formie\fields\subfields;

use verbb\formie\base\SubFieldInnerFieldInterface;
use verbb\formie\fields\Number;
use verbb\formie\helpers\SchemaHelper;

use Craft;

class DateSecondNumber extends DateNumber implements SubFieldInnerFieldInterface
{
    // Static Methods
    // =========================================================================

    public static function displayName(): string
    {
        return Craft::t('formie', 'Date - Second');
    }

    public static function getFrontEndInputTemplatePath(): string
    {
        return 'fields/number';
    }

    public static function getEmailTemplatePath(): string
    {
        return 'fields/number';
    }
    

    // Properties
    // =========================================================================

    public string $validationFormatParam = 's';
}
