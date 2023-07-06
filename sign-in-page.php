<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/sign-in-style.css">
</head>
<body>

<div class="sign-in-box">
    <form id="sign-in-form" method="get" onsubmit="signinSubmit(event)">

        <div class="form-group">
          <h4>Email address</h4>
          <input type="email" class="form-control" name="user_email" id="user_email" placeholder="Enter email" required>
        </div>

        <div class="form-group">
          <h4>Password</h4>
          <input type="password" class="form-control" name="user_pass" id="user_pass" placeholder="Password" required>
        </div>
        
        <input id="submit-button" type="submit" class="btn btn-primary" value="Sign-in"></input>

        <br><br>
        <p>Forgot Password? Click <a href="">Here</a></p>

      </form>
    </div>  

</body>
</html>