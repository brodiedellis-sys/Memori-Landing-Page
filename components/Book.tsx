import React, { useState } from 'react';
import Image from 'next/image';
// You will need to install react-pageflip: npm install react-pageflip
import HTMLFlipBook from 'react-pageflip';

// BookLogo is now just the logo image, used as the book cover
const BookLogo = () => (
  <Image src="/logo.png" alt="Memori Logo" width={192} height={192} className="mb-8 mx-auto" />
);

interface IndexPageProps {
  onNavigate: (pageNum: number) => void;
}
const IndexPage: React.FC<IndexPageProps> = ({ onNavigate }) => (
  <div className="flex flex-col items-center justify-center h-full p-8">
    <h2 className="text-3xl font-vt323 mb-6">Index</h2>
    <ul className="space-y-4">
      {[
        { label: 'Home', page: 2 },
        { label: 'About', page: 3 },
        { label: 'Features', page: 4 },
        { label: 'Blog', page: 5 },
        { label: 'Support', page: 6 },
      ].map(item => (
        <li key={item.label}>
          <button className="font-vt323 text-xl text-gold hover:underline" onClick={() => onNavigate(item.page)}>
            {item.label} <span className="text-cream">{item.page}</span>
          </button>
        </li>
      ))}
    </ul>
  </div>
);

interface PageProps {
  children: React.ReactNode;
}
const Page: React.FC<PageProps> = ({ children }) => (
  <div className="bg-darkSepia text-cream font-vt323 h-full flex items-center justify-center p-8">
    {children}
  </div>
);

export default function Book() {
  const [isOpened, setIsOpened] = useState(false);
  const [page, setPage] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookRef = React.useRef<any>(null);

  const handleOpenBook = () => {
    setIsOpened(true);
    setTimeout(() => {
      setPage(1);
      if (bookRef.current && bookRef.current.pageFlip) {
        bookRef.current.pageFlip().flip(1);
      }
    }, 500); // Delay for effect
  };

  const handleNavigate = (pageNum: number) => {
    setPage(pageNum);
    if (bookRef.current && bookRef.current.pageFlip) {
      bookRef.current.pageFlip().flip(pageNum);
    }
  };

  if (!isOpened) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-darkSepia">
        <BookLogo />
        <button className="px-8 py-4 bg-gold text-darkSepia font-vt323 rounded shadow-lg text-2xl ml-8" onClick={handleOpenBook}>
          Open Book
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-darkSepia">
      {/* @ts-expect-error - HTMLFlipBook props interface incomplete */}
      <HTMLFlipBook
        width={600}
        height={800}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1536}
        maxShadowOpacity={0.5}
        ref={bookRef}
        showCover={true}
        className="shadow-2xl"
        style={{ borderRadius: '16px' }}
        startPage={page}
      >
        {/* Cover page: your logo as the book cover */}
        <Page>
          <BookLogo />
        </Page>
        {/* Index page */}
        <Page>
          <IndexPage onNavigate={handleNavigate} />
        </Page>
        {/* Section pages */}
        <Page>Home page content</Page>
        <Page>About page content</Page>
        <Page>Features page content</Page>
        <Page>Blog page content</Page>
        <Page>Support page content</Page>
      </HTMLFlipBook>
    </div>
  );
}
