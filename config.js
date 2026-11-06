/* SisVentas — configuración de Supabase (versión externa)
   ------------------------------------------------------------
   1. Crea tu proyecto gratis en https://supabase.com
   2. En Supabase, ejecuta supabase.sql en el SQL Editor.
   3. Copia tu Project URL y tu anon public key desde
      Settings > API (en el panel de Supabase).
   4. Pega esos DOS valores aquí, entre las comillas, y guarda.
   5. Sube index.html + config.js juntos al mismo hosting
      (Netlify Drop, GitHub Pages o Hostinger).

   NO inventes valores: si dejas los marcadores tal como están,
   el panel funciona en modo local y avisa en la parte superior
   que falta configurar Supabase. La clave "anon" es pública por
   diseño (va en el navegador): cualquiera que abra tu página
   podría ver y cambiar las ventas, por eso esta versión es para
   uso personal. No compartas el enlace públicamente si guardas
   datos de clientes. */

window.SUPABASE_CONFIG = {
  url: "https://bxyrnmrnpawmfovakuxu.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4eXJubXJucGF3bWZvdmFrdXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM5MTk0NjQsImV4cCI6MjEwOTQ5NTQ2NH0.H4TrWOYxWOPQTdWN6rneo6NUubK_vnX-BUTqNHSo6Yo"
};
