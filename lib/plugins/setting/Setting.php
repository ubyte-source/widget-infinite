<?PHP

namespace Infinite\plugins\setting;

use Entity\Map as Entity;
use Entity\Validation;

class Setting extends Entity
{
    protected function initialize() : void
	{
		$name = $this->addField('name');
		$name_validator = Validation::factory('Enum');
		$name->setPatterns($name_validator);
		$name->setRequired();

		$order = $this->addField('order');
        $order_validation = Validation::factory('Enum');
        $order_validation->addAssociative(0)->addAssociative(1);
		$order->setPatterns($order_validation);
		$order->setRequired();
    }
}