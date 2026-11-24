import fs from "fs";
import path from "path";
import sharp from "sharp";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const imagesDir = path.join(publicDir, "images");
const brandingDir = path.join(imagesDir, "branding");
const campusDir = path.join(imagesDir, "campus");
const achievementsDir = path.join(imagesDir, "achievements");
const leadershipDir = path.join(imagesDir, "leadership");

[brandingDir, campusDir, achievementsDir, leadershipDir, path.join(rootDir, "src/app")].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function processLogos() {
  console.log("Processing official logos...");

  // 1. VB ONLY LOGO.png
  const vbLogoPath = path.join(rootDir, "Logo", "VB ONLY LOGO.png");
  if (fs.existsSync(vbLogoPath)) {
    const vbImage = sharp(vbLogoPath);
    const meta = await vbImage.metadata();
    console.log(`Original VB Logo dimensions: ${meta.width}x${meta.height}`);

    // Main branding logo
    await sharp(vbLogoPath)
      .resize({ width: 800, height: 800, fit: "inside" })
      .png({ quality: 95, compressionLevel: 8 })
      .toFile(path.join(brandingDir, "logo.png"));

    // Icon / Favicon (square 192x192 and 512x512)
    await sharp(vbLogoPath)
      .resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(rootDir, "src/app", "icon.png"));

    await sharp(vbLogoPath)
      .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(publicDir, "icon.png"));

    console.log("✓ Processed VB ONLY LOGO into logo.png, src/app/icon.png, and public/icon.png");
  }

  // 2. WONDER KIDZ PLAY SCHOOL LOGO.png
  const wkLogoPath = path.join(rootDir, "Logo", "WONDER KIDZ PLAY SCHOOL LOGO.png");
  if (fs.existsSync(wkLogoPath)) {
    await sharp(wkLogoPath)
      .resize({ width: 800, height: 800, fit: "inside" })
      .png({ quality: 95, compressionLevel: 8 })
      .toFile(path.join(brandingDir, "wonder_kidz_logo.png"));

    console.log("✓ Processed Wonder Kidz Play School logo into wonder_kidz_logo.png");
  }

  // 3. PLAY GROUND.png
  const pgBannerPath = path.join(rootDir, "Logo", "PLAY GROUND.png");
  if (fs.existsSync(pgBannerPath)) {
    await sharp(pgBannerPath)
      .resize({ width: 1600, fit: "inside" })
      .jpeg({ quality: 88, progressive: true })
      .toFile(path.join(campusDir, "school_playground_banner.jpg"));

    console.log("✓ Processed Play Ground Banner into school_playground_banner.jpg");
  }
}

const photoMappings = [
  {
    src: "20260103_112836.jpg.jpeg",
    dest: path.join(leadershipDir, "director_at_iit_madras.jpg"),
    title: "Director Arangi Govinda Babu at IIT Madras",
    width: 1400,
  },
  {
    src: "20240815_110344.jpg.jpeg",
    dest: path.join(campusDir, "independence_day_patriotism.jpg"),
    title: "Independence Day Celebration with Founder and Students",
    width: 1600,
  },
  {
    src: "20260830_090830.jpg.jpeg",
    dest: path.join(campusDir, "school_transport_bus.jpg"),
    title: "Vidyarthi Bhavan School Bus and Students in Traditional Attire",
    width: 1600,
  },
  {
    src: "20240401_114907.jpg.jpeg",
    dest: path.join(achievementsDir, "karate_belt_grading.jpg"),
    title: "Inter-School Karate Belt Grading Ceremony and Trophy Winners",
    width: 1600,
  },
  {
    src: "20251217_092201.jpg.jpeg",
    dest: path.join(achievementsDir, "martial_arts_champions.jpg"),
    title: "State Pencak Silat Championship Trophy Winners with School Banner",
    width: 1600,
  },
  {
    src: "20260222_153944.jpg.jpeg",
    dest: path.join(achievementsDir, "district_competition_winners.jpg"),
    title: "District Level AI and Olympiad Competition Winners with Trophies",
    width: 1600,
  },
  {
    src: "20251207_153310.jpg.jpeg",
    dest: path.join(achievementsDir, "spelling_bee_award.jpg"),
    title: "Spelling Bee Champion Award Presented by Director Arangi Govinda Babu",
    width: 1400,
  },
  {
    src: "20251114_110728.jpg.jpeg",
    dest: path.join(achievementsDir, "childrens_day_boys_awards.jpg"),
    title: "Children's Day Award Ceremony for High School Boys with Staff",
    width: 1600,
  },
  {
    src: "20251114_110837.jpg.jpeg",
    dest: path.join(achievementsDir, "childrens_day_girls_awards.jpg"),
    title: "Children's Day Award Ceremony for High School Girls with Staff",
    width: 1600,
  },
  {
    src: "20260110_125007.jpg.jpeg",
    dest: path.join(campusDir, "faculty_sankranti_celebration.jpg"),
    title: "Faculty and Staff Sankranti Celebrations with Rangoli and Bhogi",
    width: 1600,
  },
  {
    src: "20260110_130858.jpg.jpeg",
    dest: path.join(campusDir, "classical_dance_culture.jpg"),
    title: "Director with Students in Classical Dance Attire at Sankranti Sambaralu",
    width: 1600,
  },
  {
    src: "20250831_152845.jpg.jpeg",
    dest: path.join(campusDir, "traditional_dance_temple_trip.jpg"),
    title: "Classical Dance Students and Faculty at Heritage Monument Excursion",
    width: 1600,
  },
  {
    src: "20231210_161826.jpg.jpeg",
    dest: path.join(campusDir, "science_field_trip_solar.jpg"),
    title: "Students and Teachers on Science & Innovation Solar Field Trip",
    width: 1600,
  },
  {
    src: "20251129_095345.jpg.jpeg",
    dest: path.join(campusDir, "museum_field_trip.jpg"),
    title: "Students at Integrated Tribal Habitat Museum and Heritage Excursion",
    width: 1600,
  },
  {
    src: "20261101_114246.jpg.jpeg",
    dest: path.join(campusDir, "nature_field_trip.jpg"),
    title: "Sunnapugadda Nature and Forest Field Trip with Faculty",
    width: 1600,
  },
  {
    src: "20261013_170749.jpg.jpeg",
    dest: path.join(campusDir, "school_annual_picnic.jpg"),
    title: "Annual School Picnic and Excursion with Students, Teachers and Parents",
    width: 1600,
  },
  {
    src: "20250720_114132.jpg.jpeg",
    dest: path.join(campusDir, "teen_parenting_seminar.jpg"),
    title: "Teen Parenting Guidance Seminar at Vidyarthi Bhavan",
    width: 1600,
  },
  {
    src: "20240124_130252.jpg.jpeg",
    dest: path.join(leadershipDir, "founder_felicitation.jpg"),
    title: "Founder Arangi Govinda Babu Felicitation at School Annual Day",
    width: 1600,
  },
  {
    src: "20251119_100556.jpg.jpeg",
    dest: path.join(leadershipDir, "faculty_national_exhibition.jpg"),
    title: "Leadership and Faculty Delegation at National Exhibition",
    width: 1400,
  },
  {
    src: "20260301_143333.jpg.jpeg",
    dest: path.join(achievementsDir, "olympiad_ai_champions.jpg"),
    title: "Olympiad and AI Competition Prize Winners with Director",
    width: 1400,
  },
];

async function processPhotos() {
  console.log("\nProcessing authentic photos...");

  for (const item of photoMappings) {
    const srcPath = path.join(rootDir, "images", item.src);
    if (!fs.existsSync(srcPath)) {
      console.warn(`File not found: ${srcPath}`);
      continue;
    }

    try {
      // sharp.rotate() automatically checks EXIF orientation and rotates the image right-side up!
      await sharp(srcPath)
        .rotate()
        .resize({ width: item.width, withoutEnlargement: true })
        .jpeg({ quality: 84, progressive: true, mozjpeg: true })
        .toFile(item.dest);

      const stats = fs.statSync(item.dest);
      console.log(`✓ [${(stats.size / 1024).toFixed(1)} KB] ${path.basename(item.dest)}`);
    } catch (err) {
      console.error(`Error processing ${item.src}:`, err);
    }
  }
}

async function main() {
  await processLogos();
  await processPhotos();
  console.log("\nAll assets successfully processed and optimized!");
}

main().catch(console.error);
