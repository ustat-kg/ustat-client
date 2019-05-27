<template>
 <div class="header-nightsky">
        <nav class="navbar navbar-default">
            <div class="container">
                <a class="navbar-brand" href="#">LOGO</a>
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">HOME</a></li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">NEWS <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                 <li><a href="#">Page 1-3</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">FEATURES <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">DEMOS<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Page 1-1</a></li>
                                <li><a href="#">Page 1-2</a></li>
                                <li><a href="#">Page 1-3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
  name: 'app-footer',
  data () {
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);

body {
    font-family: 'Montserrat', sans-serif;
}

.header-nightsky {
    color:cornsilk;
    background: url("../assets/bg.png") no-repeat;
    background-size: cover;
    background-position: bottom;
    padding-bottom: 100px;
}

.header-nightsky .navbar-nav>li>a {
    color: rgb(17, 15, 15);
    font-size: 18px;
    border-radius: 10px;
}

.header-nightsky .navbar {
    margin-bottom: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    border-bottom:none;
    background-color: transparent;
    min-width: 300px;
    border: none;
}

.header-nightsky .navbar-default .navbar-nav>.open>a,
.header-nightsky .navbar-default .navbar-nav>.open>a:focus,
.header-nightsky .navbar-default .navbar-nav>.open>a:hover {
    color: rgb(177, 24, 24);
    background-color: transparent;
}

.header-nightsky .nav>li>a:focus,
.header-nightsky .nav>li>a:hover {
    color:  rgb(177, 24, 24);
    background-color: transparent;
}

.header-nightsky .navbar-nav>li {
    margin-right: 20px;
}

.header-nightsky .navbar-nav {
   margin-top: 12px;
}

.header-nightsky .navbar-toggle {
    background-color: transparent !important;
    margin-top: 20px;
    border: 1px solid  rgb(177, 24, 24);
}

.header-nightsky .navbar-toggle .icon-bar {
    background-color:  rgb(177, 24, 24);
}

.header-nightsky .navbar-brand {
    color:  rgb(177, 24, 24);
    font-size: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.header-nightsky .navbar-brand:hover {
    color:  rgb(177, 24, 24);
}

.header-nightsky .hero {
    text-align: center;
    margin-top: 80px;
    margin-bottom: 100px;
}

.header-nightsky .hero h1 {
    color:  rgb(177, 24, 24);
    font-weight: bold;
    font-size: 60px;
    margin-bottom: 36px;
}


.header-nightsky .hero p {
    color:  rgb(177, 24, 24);
    font-size: 22px;
    max-width: 660px;
    margin: 0 auto 20px;
    font-weight: normal;
    line-height: 1.5;
}

.header-nightsky .btn-primary {
    color: #fff;
    background-color: transparent;
    border-color: #fffbfb !important;
    outline:none;
    margin-right: 20px;
    margin-top: 20px;
    font-size: 24px;
    padding: 18px 24px;
    transition:0.2s background-color;
}

.header-nightsky .btn-primary:hover {
    background-color:rgba(255,255,255,0.1);
}

.header-nightsky .btn-primary:active {
    transform:translateY(1px);
}

@media screen and (max-width: 767px) {

    .header-nightsky .navbar-default .navbar-nav .open .dropdown-menu>li>a{
        color: #fff;
        font-size: 16px;
    }

    .header-nightsky .navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{
        color: #ccc;
    }

    .header-nightsky .navbar-collapse {
        margin-left: 20px;
        border-top: none;
        box-shadow: none;
    }

    .header-nightsky .hero{
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .header-nightsky .hero h1{
        font-size: 42px;
    }
}
</style>
