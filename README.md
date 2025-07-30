# 🚀 NestJS Fundamental Guide + CLI & Clean Architecture Intro

Ini adalah dokumentasi dasar untuk belajar **NestJS** mulai dari nol, dengan fokus pada penggunaan **CLI**, struktur proyek, dan prinsip **Clean Architecture**.

---

## 🧱 Apa itu NestJS?

NestJS adalah framework backend berbasis **Node.js & TypeScript**, sangat cocok untuk aplikasi enterprise karena menerapkan konsep modular dan scalable architecture.

---

## 🛠 Instalasi Awal

### 1. Install CLI NestJS

```bash
npm install -g @nestjs/cli
```

### 2. Membuat Proyek Baru

```bash
nest new my-project
```

CLI akan menanyakan apakah ingin menggunakan **npm** atau **yarn**, lalu akan membuat struktur awal seperti:

```
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
main.ts
```

---

## ⚙️ CLI Commands Penting

| Perintah | Fungsi | Hasil |
|---------|--------|-------|
| `nest g module users` | Buat module | `users/users.module.ts` |
| `nest g controller users` | Buat controller | `users/users.controller.ts` |
| `nest g service users` | Buat service | `users/users.service.ts` |
| `nest g class utils/logger` | Buat class | `utils/logger.ts` |
| `nest g interface users/user` | Buat interface | `users/interfaces/user.interface.ts` |

> Gunakan `--flat` jika tidak ingin CLI membuat folder.

---

## 🧩 Struktur Dasar Module

Setiap fitur sebaiknya dipisah ke dalam module. Contoh:

```
src/
└── modules/
    └── user/
        ├── user.module.ts
        ├── user.controller.ts
        ├── user.service.ts
```

`app.module.ts` akan mengimpor semua module utama.

---

## 🧠 Konsep Modular NestJS

- **Controller**: Tempat menerima request dari user (GET, POST, dll)
- **Service**: Tempat logika aplikasi
- **Module**: Mengelompokkan semua bagian fitur
- **Provider**: Service, use case, atau logic lain yang bisa di-*inject*

---

## 📐 Clean Architecture Ringan

Struktur rekomendasi:

```
modules/
└── user/
    ├── controllers/
    ├── services/
    ├── use-cases/
    ├── repositories/
    ├── dto/
    ├── entities/
```

---

## 🧪 Menjalankan Proyek

```bash
npm run start:dev
```

---

## ✅ Validasi Data (DTO)

Install:
```bash
npm install class-validator class-transformer
```

Contoh `create-user.dto.ts`:
```ts
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
```

---

## 🔌 Pengantar Prisma

1. Install:
   ```bash
   npm install prisma --save-dev
   npm install @prisma/client
   ```

2. Inisialisasi:
   ```bash
   npx prisma init
   ```

3. Buat `prisma.service.ts` lalu inject ke repository.

---

## 🧼 Best Practice Dasar

- Selalu pisahkan module per fitur
- Gunakan DTO untuk semua input
- Hindari logika bisnis di controller
- Gunakan dependency injection
- Unit test per module jika memungkinkan
- Buat `shared/` untuk helper, guard, filter, dll

---

## 📚 Referensi Lanjutan

- [Dokumentasi Resmi NestJS](https://docs.nestjs.com)
- [CLI Commands](https://docs.nestjs.com/cli/overview)
- [Clean Architecture by Uncle Bob](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)

---

## 🧑‍💻 Next Step?

Setelah memahami dasar NestJS:
- Mulailah integrasi database dengan **Prisma**
- Pelajari penggunaan **Interceptor**, **Pipe**, **Guard**
- Terapkan prinsip **Clean Architecture** untuk scale aplikasi