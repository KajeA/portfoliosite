// ── Init ──
window.onload = function() { document.body.classList.remove('is-preload'); }
window.ontouchmove = function() { return false; }

// ── Last updated ──
const lastUpdated = '2026-04-12';
const d = new Date(lastUpdated);
document.getElementById('last-updated').textContent =
    'Last updated ' + d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });

// ── Preview open/close ──
const backdrop = document.getElementById('preview-backdrop');

document.querySelectorAll('.preview-trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const preview = document.getElementById(targetId);
        if (preview) {
            preview.style.display = 'block';
            backdrop.style.display = 'block';
        }
    });
});

document.querySelectorAll('.doc-preview-close').forEach(function(btn) {
    btn.addEventListener('click', function() {
        this.closest('.doc-preview').style.display = 'none';
        backdrop.style.display = 'none';
    });
});

backdrop.addEventListener('click', function() {
    document.querySelectorAll('.doc-preview').forEach(function(p) {
        p.style.display = 'none';
    });
    backdrop.style.display = 'none';
});

// ── Block Ctrl/Cmd+S ──
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
    }
});