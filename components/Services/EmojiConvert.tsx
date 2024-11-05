import twemoji from 'twemoji';

export default function EmojiText({ text }: { text: string }) {
  const parsedText = twemoji.parse(text, { folder: 'svg', ext: '.svg' });

  return <div dangerouslySetInnerHTML={{ __html: parsedText }} />;
}
