# Maison Elara — Butik Moda Demo (Pixlane.co)

Bu proje, **Pixlane.co AI Web Studio** için hazırlanmış, butik moda markası **Maison Elara** adına tasarlanmış **tek sayfa demo web sitesi**dir.

Amaç, şunları referans olarak gösterebilmeniz:

- **Butik / moda odaklı** sade ve zarif tasarım
- Ürün odaklı **koleksiyon bölümü** (hover animasyonlu kartlar)
- Marka hikâyesini anlatan **Hakkımızda** alanı
- Kampanya / indirim için **CTA bandı**
- **İletişim formu** (Formspree entegrasyonu ile)
- Sayfanın her yerinde net bir **“Pixlane.co ile geliştirildi”** imzası

---

## Canlıya Alma / Önizleme

1. Klasöre girin:

   ```bash
   cd pixlane-butik-demo
   ```

2. En basit haliyle `index.html` dosyasını tarayıcıda açabilirsiniz:

   - Windows: dosyaya çift tıklayın veya sağ tıklayıp **Birlikte aç** → tarayıcı seçin.

3. Lokal sunucu ile (önerilen):

   ```bash
   npx serve .
   ```

   Ardından terminalde görünen adres (örn. `http://localhost:3000`) üzerinden siteyi görüntüleyin.

> `package.json` içindeki `start`/`preview` script'leri de aynı komutu (`npx serve .`) çalıştırır.

---

## Dosya Yapısı

- `index.html` – Sayfanın HTML iskeleti
- `styles.css` – Tüm tasarım ve responsive stiller
- `script.js` – Intersection Observer ile fade-in animasyonları
- `package.json` – Basit script ve proje bilgisi
- `README.md` – Açıklama ve kurulum adımları

---

## GitHub Pages İçin Önerilen Kullanım

1. Bu klasörü bir GitHub reposuna yükleyin (örnek: `pixlane/maison-elara-demo`).
2. Repoda **Settings → Pages** bölümüne gidin.
3. **Source** olarak:
   - Branch: `main`
   - Folder: `/ (root)`
   - Kaydedin.
4. Birkaç dakika sonra oluşan `https://kullaniciadi.github.io/maison-elara-demo/` benzeri linki
   **pixlane.co** üzerinde referans bağlantı olarak kullanabilirsiniz.

---

## Portföyde Nasıl Sunulur?

- Başlık önerisi: **“Maison Elara — Butik Moda E‑Ticaret Demo”**
- Kısa açıklama: *“Butik moda markaları için AI destekli tasarım ile hazırlanmış, tek sayfa koleksiyon & iletişim odaklı demo site. Pixlane.co ile 3–5 gün içinde benzerini markanıza özel yayına alabiliriz.”*
- Canlı link olarak GitHub Pages URL’sini kullanın.

