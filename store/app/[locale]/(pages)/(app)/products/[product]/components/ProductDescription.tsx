import type { JSX } from "react";

const ProductDescription = (): JSX.Element => {
  const description = `
    <p>Introducing our revolutionary <strong>XYZ-3000</strong> - the pinnacle of innovation in personal technology!</p>
    <br />
    <h4>Key Features:</h4>
    <ul>
      <li>🚀 <em>Blazing-fast</em> A14 Bionic chip</li>
      <li>📱 6.1-inch Super Retina XDR display</li>
      <li>📸 Triple-lens camera system with LiDAR scanner</li>
      <li>🔋 All-day battery life with fast charging</li>
    </ul>
    <br />
    <p>Experience the future of mobile computing with our cutting-edge device. Whether you're a professional on-the-go, a creative visionary, or a tech enthusiast, the XYZ-3000 is designed to elevate your digital life to new heights.</p>
    <br />
    <blockquote>"It's not just a product; it's a game-changer." - Tech Insider</blockquote>
    <br />
    <p>Don't miss out on this opportunity to own the most advanced piece of technology on the market. Order now and step into tomorrow, today!</p>
  `;

  return (
    <div>
      <h3 className="text-2xl font-bold">About This Product</h3>
      <div className="my-6 h-[1px] w-full bg-primary/30" />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default ProductDescription;
