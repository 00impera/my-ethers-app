
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Chameleon Crypto Dashboard</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
  <!-- Google Fonts for style -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:700,400&display=swap" rel="stylesheet">
  <style>
    body {
      background: linear-gradient(135deg, #ffe9a7 0%, #6ee7b7 100%);
      min-height: 100vh;
      font-family: 'Montserrat', Arial, sans-serif;
    }
    .dashboard-card {
      background: linear-gradient(133deg, #A2E887 0%, #4fd1c5 80%, #3b82f6 100%);
      border-radius: 2.5rem;
      box-shadow: 0 8px 40px 0 #0002;
      color: #fff;
      padding: 2.5rem 2rem 2rem 2rem;
      position: relative;
      max-width: 440px;
      margin: 3rem auto 2rem auto;
      overflow: visible;
    }
    .dashboard-header {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: .5rem;
      justify-content: center;
      position: relative;
      z-index: 2;
    }
    .dashboard-header h1 {
      font-size: 2.7rem;
      font-weight: bold;
      margin-bottom: 0;
      letter-spacing: 2px;
      text-shadow: 1px 2px 14px #0a0a0a55;
      font-family: 'Montserrat', Arial, sans-serif;
    }
    .chameleon-logo {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: rgba(255,255,255,0.13);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 16px #0002;
      margin-left: -24px;
    }
    .mountain-graphic {
      position: absolute;
      left: 0;
      bottom: -45px;
      width: 100%;
      height: 110px;
      z-index: 1;
      opacity: 0.93;
    }
    .coin-icons {
      margin-top: 1.7rem;
      display: flex;
      justify-content: center;
      gap: 2.2rem;
      font-size: 2.2rem;
      z-index: 2;
      position: relative;
      text-shadow: 0px 1px 8px #0003;
    }
    .coin-icons .fa-bitcoin { color: #f7931a;}
    .coin-icons .fa-ethereum { color: #627eea;}
    .coin-icons .fa-monero { color: #ff6600;}
    .coin-icons .fa-coins { color: #f5c16c;}
    .card-form {
      background: rgba(255,255,255,0.92);
      border-radius: 1.3rem;
      padding: 2rem 1.5rem 1.5rem 1.5rem;
      margin-top: 2.4rem;
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
    /* Payment section style */
    .payment-section {
      background: rgba(255,255,255,0.94);
      border-radius: 1.3rem;
      margin-top: 2.2rem;
      padding: 1.2rem 1.2rem 0.7rem 1.2rem;
      box-shadow: 0 8px 32px 0 #0001;
      z-index: 2;
      position: relative;
    }
    @media (max-width: 600px) {
      .dashboard-card { padding: 1.2rem 0.4rem 1.2rem 0.4rem; }
      .dashboard-header h1 { font-size: 1.7rem; }
      .chameleon-logo { width: 46px; height: 46px;}
      .mountain-graphic { height: 55px; bottom:-25px;}
      .coin-icons { margin-top: 1.2rem; font-size: 1.1rem;}
      .card-form { padding: 1.2rem 0.4rem 0.7rem 0.7rem; }
      .payment-section { padding: 0.7rem 0.4rem 0.5rem 0.7rem; }
    }
  </style>
</head>
<body>
  <div class="dashboard-card">
    <div class="dashboard-header">
      <div class="chameleon-logo">
        <!-- Stylized Chameleon SVG logo -->
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
          <!-- Chameleon body -->
          <ellipse cx="28" cy="32" rx="19" ry="12" fill="#8be374"/>
          <!-- Head -->
          <ellipse cx="45" cy="22" rx="7" ry="6" fill="#5edb9c"/>
          <!-- Eye white -->
          <ellipse cx="49" cy="21" rx="2" ry="2" fill="#fff"/>
          <!-- Eye black -->
          <ellipse cx="49" cy="21" rx="0.8" ry="0.8" fill="#333"/>
          <!-- Smile -->
          <path d="M46 25 Q44.5 26.5 43 25" stroke="#333" stroke-width="1" fill="none"/>
          <!-- Front leg -->
          <rect x="38" y="40" width="4" height="1.3" rx="0.7" fill="#7AC66C"/>
          <!-- Back leg -->
          <rect x="21" y="39" width="4" height="1.3" rx="0.7" fill="#7AC66C"/>
          <!-- Tail -->
          <path d="M12 38 Q3 32 12 23 Q20 17 26 23 Q33 28 27 36 Q21 43 12 38" stroke="#7AC66C" stroke-width="1.5" fill="none"/>
        </svg>
      </div>
      <h1>Chameleon Crypto</h1>
    </div>
    <!-- Mountain SVG Graphic -->
    <svg class="mountain-graphic" viewBox="0 0 440 110" fill="none">
      <polygon points="0,110 80,40 150,85 220,55 290,110 370,65 440,110" fill="#d3c69a"/>
      <polygon points="80,40 150,85 220,55" fill="#b3b49e"/>
      <polygon points="220,55 290,110 370,65" fill="#e8b968"/>
    </svg>
    <div class="coin-icons">
      <i class="fab fa-bitcoin"></i>
      <i class="fab fa-ethereum"></i>
      <i class="fab fa-monero"></i>
      <i class="fas fa-coins"></i>
    </div>
    <div class="card-form mt-4">
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
          <i class="fas fa-wallet me-2"></i>Connect All Wallets
        </button>
        <button type="button" class="btn btn-outline-primary w-100">
          <i class="fab fa-ethereum me-2"></i>Connect MetaMask
        </button>
      </form>
    </div>
    <div class="payment-section mt-4">
      <h5 class="text-center text-dark mb-3"><i class="fas fa-credit-card"></i> Simple Payment</h5>
      <form>
        <div class="mb-3">
          <label class="form-label text-dark"><i class="fas fa-dollar-sign"></i> Amount</label>
          <input type="number" class="form-control" placeholder="Enter amount (ETH, BTC, etc.)" min="0.0001" step="any" required>
        </div>
        <button type="button" class="btn btn-gradient w-100">
          <i class="fas fa-paper-plane me-2"></i>Send Payment
        </button>
      </form>
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
