document.addEventListener('DOMContentLoaded', function() {

    // ── Init ──
    document.body.classList.remove('is-preload');

    // ── Last updated ──
    const lastUpdated = '2026-04-12';
    const d = new Date(lastUpdated + 'T12:00:00');
    const el = document.getElementById('last-updated');
    if (el) {
        el.textContent = 'Last updated ' + d.toLocaleDateString('en-CA', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    }

    // ── Preview open/close ──
    const backdrop = document.getElementById('preview-backdrop');

    document.querySelectorAll('.preview-trigger').forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            const targetId = trigger.getAttribute('data-target');
            const preview = document.getElementById(targetId);
            if (preview) {
                preview.style.display = 'block';
                backdrop.style.display = 'block';
            }
        });
    });

    document.querySelectorAll('.doc-preview-close').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            btn.closest('.doc-preview').style.display = 'none';
            backdrop.style.display = 'none';
        });
    });

    backdrop.addEventListener('click', function() {
        document.querySelectorAll('.doc-preview').forEach(function(p) {
            p.style.display = 'none';
        });
        backdrop.style.display = 'none';
    });

    // ── Escape key closes preview ──
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.doc-preview').forEach(function(p) {
                p.style.display = 'none';
            });
            backdrop.style.display = 'none';
        }
        // Block Ctrl/Cmd+S
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
        }
    });

});

window.ontouchmove = function() { return false; }
