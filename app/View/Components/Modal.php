<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Modal extends Component
{
  public $btnText;
  public $headingText;
  public $innerHTML;
  public $id;

  /**
   * Create a new component instance.
   */
  public function __construct(
    $btnText = 'Click me',
    $headingText = 'This is a modal',
    $innerHTML = '<div>There is something inside the modal</div>',
    $id = 'defaultModal'
  ) {
    $this->btnText = $btnText;
    $this->headingText = $headingText;
    $this->innerHTML = $innerHTML;
    $this->id = $id;
  }

  /**
   * Get the view / contents that represent the component.
   */
  public function render(): View|Closure|string
  {
    return view('components.modal');
  }
}