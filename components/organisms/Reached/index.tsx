import ReachedItem from './ReachedItem';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem value="290M+" title="Players Top Up" />
          <ReachedItem value="12.500" title="Games Available" />
          <ReachedItem value="99,9%" title="Happy Players" />
          <ReachedItem value="4.7" title="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
