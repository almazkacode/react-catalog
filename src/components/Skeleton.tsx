import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={270}
    height={440}
    viewBox="0 0 270 440"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="38" y="360" rx="3" ry="3" width="222" height="14" />
    <rect x="39" y="386" rx="3" ry="3" width="77" height="41" />
    <rect x="39" y="261" rx="3" ry="3" width="222" height="86" />
    <rect x="39" y="20" rx="0" ry="0" width="221" height="213" />
    <rect x="193" y="385" rx="3" ry="3" width="71" height="42" />
  </ContentLoader>
);
