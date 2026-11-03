

https://gitlab.lnu.se/1dv525/template/a01-website


JSFiddle
CodePen

https://caniuse.com/


<!doctype html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <title>Me-sidan</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="style.min.css" />
    <link rel='shortcut icon' href='img/favicon.ico'/>
</head>
<body>
    <h1>Om Mig Själv</h1>
    <p>Här kommer snart min egen fina me-sida.</p>
    <img src="img/me.jpg" class="me" alt="Bild på Mikael Roos">
</body>
</html>


box model

how width is calculated

* {
  box-sizing: border-box;
}


https://validator.w3.org/
https://jigsaw.w3.org/css-validator/
https://validator.w3.org/unicorn/

https://www.w3.org/2009/cheatsheet/


.navbar {
    padding: 1em;
    background-color: #fff;
    border-top: 1px solid #9c9;
}

.navbar a {
    display: inline-block;
    padding: 0.5em 1em;
    border: 1px solid #999;
    text-decoration: none;
}

.navbar a:hover {
    background-color: #eee;
    text-decoration: underline;
}



@media (max-width: 980px) {
    .big-box {
        width: 700px;
        background-color: #2ecc40;
        font-size: 3em;
    }
}

@media (max-width: 720px) {
    .big-box {
        width: 96%;
        background-color: #0074d9;
        font-size: 2em;
    }
}
