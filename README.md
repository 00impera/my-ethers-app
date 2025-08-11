<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Crypto Vault Pro - Dashboard</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
  <!-- Google Fonts for style -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:700,400&display=swap" rel="stylesheet">
  <style>
    body {
      background: linear-gradient(135deg, #fbeee6 0%, #f5c16c 100%);
      min-height: 100vh;
      font-family: 'Montserrat', Arial, sans-serif;
    }
    .dashboard-card {
      background: linear-gradient(135deg, #6ee7b7 0%, #3b82f6 100%);
      border-radius: 2rem;
      box-shadow: 0 6px 32px 0 #0002;
      color: #fff;
      padding: 2rem;
      position: relative;
      overflow: hidden;
    }
    .dashboard-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      justify-content: center;
    }
    .dashboard-header h1 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 0;
      letter-spacing: 2px;
      text-shadow: 1px 2px 12px #0005;
    }
    .camelion-graphic {
      width: 90px;
      height: 90px;
      position: absolute;
      top: -36px;
      right: -36px;
      z-index: 1;
    }
    .mountain-graphic {
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 90px;
      z-index: 0;
      opacity: 0.95;
    }
    .coin-icons {
      margin-top: 115px;
      display: flex;
      justify-content: center;
      gap: 1.7rem;
      font-size: 2rem;
      z-index: 2;
      position: relative;
    }
    .coin-icons .fa-bitcoin { color: #f7931a;}
    .coin-icons .fa-ethereum { color: #627eea;}
    .coin-icons .fa-monero { color: #ff6600;}
    .coin-icons .fa-coins { color: #f5c16c;}
    .card-form {
      background: rgba(255,255,255,0.85);
      border-radius: 1.5rem;
      padding: 2rem 1.5rem 1.5rem 1.5rem;
      margin-top: 2.7rem;
      box-shadow: 0 8px 32px 0 #0001;
      z-index: 2;
      position: relative;
    }
    .btn-gradient {
      background: linear-gradient(90deg, #f5c16c, #6ee7b7, #3b82f6);
      color: #fff !important;
      border: none;
      transition: background 0.3s;
    }
    .btn-gradient:hover {
      background: linear-gradient(90deg, #3b82f6, #6ee7b7, #f5c16c);
    }
    @media (max-width: 600px) {
      .dashboard-card { padding: 1rem; }
      .dashboard-header h1 { font-size: 2rem; }
      .camelion-graphic { width: 60px; height: 60px; }
      .mountain-graphic { height: 50px; }
      .coin-icons { margin-top: 75px; font-size: 1.1rem;}
    }
  </style>
</head>
<body>
  <div class="container py-5" style="max-width: 470px; position:relative;">
    <div class="dashboard-card mt-4 mb-2">
      <div class="dashboard-header">
        <h1>Crypto Vault</h1>
      </div>
      <!-- Chameleon SVG Graphic -->
      <svg class="camelion-graphic" viewBox="0 0 80 80" fill="none">
        <!-- Body -->
        <ellipse cx="45" cy="55" rx="33" ry="22" fill="#A2E887"/>
        <!-- Head -->
        <ellipse cx="71" cy="41" rx="13" ry="11" fill="#97D77A"/>
        <!-- Eye -->
        <ellipse cx="78" cy="39" rx="2.4" ry="2.4" fill="#fff"/>
        <ellipse cx="78" cy="39" rx="1.1" ry="1.1" fill="#333"/>
        <!-- Smile -->
        <path d="M75 46 Q72 49 70 46" stroke="#333" stroke-width="1.5" fill="none"/>
        <!-- Leg front -->
        <rect x="60" y="70" width="7" height="2.7" rx="1.2" fill="#7AC66C"/>
        <!-- Leg back -->
        <rect x="32" y="69" width="7" height="2.7" rx="1.2" fill="#7AC66C"/>
        <!-- Tail -->
        <path d="M18 65 Q3 58 13 45 Q22 34 33 43 Q45 52 37 63 Q29 74 13 66" stroke="#7AC66C" stroke-width="2.5" fill="none"/>
      </svg>
      <!-- Mountain SVG Graphic -->
      <svg class="mountain-graphic" viewBox="0 0 400 90" fill="none">
        <polygon points="0,90 60,30 120,80 180,40 240,90 320,50 400,90" fill="#E2D4B7"/>
        <polygon points="60,30 120,80 180,40" fill="#B4B4A6"/>
        <polygon points="180,40 240,90 320,50" fill="#D1A962"/>
      </svg>
      <div class="coin-icons">
        <i class="fab fa-bitcoin"></i>
        <i class="fab fa-ethereum"></i>
        <i class="fab fa-monero"></i>
        <i class="fas fa-coins"></i>
      </div>
      <div class="card-form">
        <h3 class="text-center mb-4 text-dark">Login</h3>
        <form>
          <div class="mb-3">
            <label class="form-label text-dark"><i class="fa fa-envelope"></i> Email address</label>
            <input type="email" class="form-control" placeholder="Enter email" required>
          </div>
          <div class="mb-3">
            <label class="form-label text-dark"><i class="fa fa-lock"></i> Password</label>
            <input type="password" class="form-control" placeholder="Password" required>
          </div>
          <button type="submit" class="btn btn-gradient w-100 mb-2">Login</button>
          <div class="d-flex justify-content-between mb-2">
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
    </div>
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
