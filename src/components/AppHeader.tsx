interface AppHeaderProps {
  title: string;
}

export default function AppHeader({ title }: AppHeaderProps): JSX.Element {
  if (title.length >= 5) {
    console.log(title.length);
    return (
      <header>
        <h1>{title}</h1>
      </header>
    );
  } else {
    console.log(title.length);
    return (
      <header>
        <h1>(The title is a work-in-progress)</h1>
      </header>
    );
  }
}
