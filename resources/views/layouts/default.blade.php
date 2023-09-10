<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="relative min-h-screen">
  <nav class="navbar mx-auto max-w-5xl bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl normal-case" href="/home">AutocorrectGuy</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/posts">Posts</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  <div class="mx-auto max-w-5xl border border-base-300 rounded-md p-10 pb-20">
    @yield('content')
  </div>
  <footer class="footer footer-center absolute bottom-0 h-20 w-full bg-base-300 p-4 text-base-content">
    <aside>
      <p>Page made by AutocorrectGuy, 2023</p>
    </aside>
  </footer>
</body>

</html>
