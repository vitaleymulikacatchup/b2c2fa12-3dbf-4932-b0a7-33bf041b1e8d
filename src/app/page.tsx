"use client";
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <>
      <SplitHero
        title="Welcome to MemeCoin"
        subtitle="Join the vibrant world of memes and crypto"
        primaryButtonText="Buy MemeCoin"
        secondaryButtonText="Learn More"
        onPrimaryButtonClick={() => {}}
        onSecondaryButtonClick={() => {}}
      />

      <CtaAbout
        title="Get to Know MemeCoin"
        descriptions={[
          "MemeCoin is a fun, engaging way to explore the world of cryptocurrencies.",
          "Join our community of meme lovers and make crypto fun!",
          "Be part of the revolution with MemeCoin."
        ]}
      />

      <HowToBuy3D
        title="How to Buy MemeCoin"
        steps={[
          { title: 'Step 1', description: 'Create a wallet.', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
          { title: 'Step 2', description: 'Choose an exchange.', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
          { title: 'Step 3', description: 'Buy MemeCoin!', image: '/images/placeholder3.avif', position: 'right', isCenter: false },
        ]}
      />

      <NumberGridTokenomics
        title="Tokenomics"
        description="MemeCoin is designed with our community in mind."
        kpiItems={[
          { value: '10M', description: 'Total Supply' },
          { value: '1M', description: 'Market Cap' },
          { value: '500K', description: 'Liquidity' },
        ]}
      />

      <FooterLogo
        logoSrc="/images/logo.svg"
        logoAlt="MemeCoin Logo"
        logoText="MemeCoin"
        className="footer"
        svgClassName="footer-svg"
      />
    </>
  );
}
