/*
  Simple client-side passcode gate.
  ---------------------------------
  This is a convenience gate, NOT real security. Anyone who views the page
  source can read the passcode. Use this for things like "keep casual
  visitors from stumbling onto answer keys" — never for anything that
  actually needs to stay private (grades, student data, personal info).
  For real access control, put that content behind a login system instead
  (e.g. Google Classroom, or Cloudflare Access / Netlify Identity in front
  of the page).

  Usage in HTML:
    <div class="gate-box" data-gate="CHANGE-ME">
      <p class="tag">Gated</p>
      <p>Enter the class passcode to view this section.</p>
      <div class="gate-form">
        <input type="password" placeholder="Passcode" aria-label="Passcode">
        <button class="btn primary">Unlock</button>
      </div>
      <p class="gate-error">That's not the right passcode. Try again.</p>
      <div class="gate-content" hidden>
        ... the actual gated content goes here ...
      </div>
    </div>
*/
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-gate]').forEach(function (box) {
    var passcode = box.getAttribute('data-gate');
    var input = box.querySelector('input[type="password"]');
    var button = box.querySelector('.gate-form .btn');
    var error = box.querySelector('.gate-error');
    var content = box.querySelector('.gate-content');
    var form = box.querySelector('.gate-form');

    function tryUnlock() {
      if (input.value === passcode) {
        content.hidden = false;
        form.hidden = true;
        error.style.display = 'none';
        box.querySelector('p').style.display = 'none';
      } else {
        error.style.display = 'block';
      }
    }

    if (button) button.addEventListener('click', tryUnlock);
    if (input) input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') tryUnlock();
    });
  });
});
