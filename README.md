
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Crypto Vault Pro - Authentication</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>
<body class="bg-light">

<div class="container my-5" style="max-width: 400px;">
  <h2 class="mb-4 text-center">Login</h2>
  <form>
    <div class="mb-3">
      <label class="form-label"><i class="fa fa-envelope"></i> Email address</label>
      <input type="email" class="form-control" placeholder="Enter email" required>
    </div>
    <div class="mb-3">
      <label class="form-label"><i class="fa fa-lock"></i> Password</label>
      <input type="password" class="form-control" placeholder="Password" required>
    </div>
    <button type="submit" class="btn btn-primary w-100 mb-2">Login</button>
    <div class="d-flex justify-content-between">
      <a href="#" data-bs-toggle="modal" data-bs-target="#forgotModal">Forgot password?</a>
      <a href="#" data-bs-toggle="modal" data-bs-target="#registerModal">Register</a>
    </div>
    <hr>
    <!-- Wallet Connect Buttons -->
    <button type="button" class="btn btn-outline-dark w-100 mb-2">
      <i class="fab fa-google-wallet me-2"></i>Connect Google Wallet
    </button>
    <button type="button" class="btn btn-outline-primary w-100">
      <i class="fab fa-ethereum me-2"></i>Connect MetaMask
    </button>
  </form>
</div>

<!-- Register Modal -->
<div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <form>
        <div class="modal-header">
          <h5 class="modal-title" id="registerModalLabel">Register</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label"><i class="fa fa-user"></i> Username</label>
            <input type="text" class="form-control" placeholder="Enter username" required>
          </div>
          <div class="mb-3">
            <label class="form-label"><i class="fa fa-envelope"></i> Email address</label>
            <input type="email" class="form-control" placeholder="Enter email" required>
          </div>
          <div class="mb-3">
            <label class="form-label"><i class="fa fa-lock"></i> Password</label>
            <input type="password" class="form-control" placeholder="Password" required>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-success w-100">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Forgot Password Modal -->
<div class="modal fade" id="forgotModal" tabindex="-1" aria-labelledby="forgotModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <form>
        <div class="modal-header">
          <h5 class="modal-title" id="forgotModalLabel">Forgot Password</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label"><i class="fa fa-envelope"></i> Email address</label>
            <input type="email" class="form-control" placeholder="Enter your email" required>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-warning w-100">Reset Password</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Bootstrap JS (for modals) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
