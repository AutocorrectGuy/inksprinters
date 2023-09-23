<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class conversionCard extends Component
{
  public string $from;
  public string $to;
  public string $route;
  /**
   * Create a new component instance.
   */
  public function __construct(string $from, string $to, string $route)
  {
    $this->from = $from;
    $this->to = $to;
    $this->route = $route;
  }

  /**
   * Get the view / contents that represent the component.
   */
  public function render(): View|Closure|string
  {
    return view('components.conversion-card');
  }
}