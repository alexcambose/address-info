import { Metadata } from 'next';
import { Container } from '../../../components/base/layout/Container';
import { Overview } from '../../../views/overview/Overview';

export default function Page() {
  return (
    <>
      <Container>
        <Overview />
      </Container>
    </>
  );
}
export async function generateMetadata({
  params,
}: {
  params: { address: string };
}): Promise<Metadata> {
  return {
    title: 'Address Info - ' + params.address,
  };
}
