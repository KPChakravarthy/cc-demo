import Lightroom from 'react-lightbox-gallery'

const Gallery = (props) => {
  var settings = {
    columnCount:{
      default:3,
      mobile:2,
      tab:3
    },
    mode: 'light'
  }
  return (
    <div className="gallery-box container">
      <div className="space-header">
        <Lightroom images={props.data?.items ?? []} settings={settings} />
      </div>
    </div>
  );
};

export default Gallery;
