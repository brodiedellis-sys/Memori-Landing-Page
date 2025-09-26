import { redirect } from 'next/navigation';

export default function AboutPage() {
  // Redirect to homepage since About content is now on main page
  redirect('/');
}
