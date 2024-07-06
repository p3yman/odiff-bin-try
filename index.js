const { compare } = require("odiff-bin");

async function run() {
  const { match } = await compare(
    "./screenshots/instagram-profile-old.png",
    "./screenshots/instagram-profile-new.png",
    "./diff/instagram-profile-diff2.png"
  );

  if (match) {
    console.log("✅ The images are identical.");
    return;
  }

  console.log("❌ The images are different.");
}

run();
