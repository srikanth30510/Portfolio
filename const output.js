const output = await replicate.run(
  "tencentarc/gfpgan:297a243ce8643961d52f745f9b6c8c1bd96850a51c92be5f43628a0d3e08321a",
  {
    input: {
      img: "C:\Users\KLU21\Downloads\Telegram Desktop\photo_2024-01-24_07-51-44.jpg",
      scale: 2,
      version: "v1.4"
    }
  }
);
console.log(output);