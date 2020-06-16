
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Sprint Challenge - About</title>

  <link href="https://fonts.googleapis.com/css?family=Roboto|Rubik" rel="stylesheet">
  <link rel="stylesheet" href="css/index.css">

</head>

<body>
<header>
    
    <nav>
        <img src="assets/lambda-black.png" alt="">
        <a href="index.html">Home</a>
        <a href="aboutus.html">About</a>
        <a href="products.html">Products</a>
        <a href="blog.html">Blog</a>
        <a href="contact.html">Contact</a>

       
        </nav>
        <div>
            
        </div>
        <div class="container about-page">
            <img src="assets/jumbo.jpg" alt="">
            <h1>Contact Us</h1>

               <p>
                   To Contact us Please fill out this form
               </p>


               
        </div>

        
</header>



Welcome <?php echo $_POST["name"]; ?>
<br>
Your address: <?php echo $_POST["address"]; ?>
<br>
Your email address is: <?php echo $_POST["email"]; ?>
<br>
And you said: <?php echo $_POST["comment"] ?>
</body>
</html>

