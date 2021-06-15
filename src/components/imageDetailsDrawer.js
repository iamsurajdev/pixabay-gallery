import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GetAppIcon from "@material-ui/icons/GetApp";
import CommentIcon from "@material-ui/icons/Comment";
import Button from "@material-ui/core/Button";

const ImageDetailsDrawer = ({ closeDrawer, imageDrawer }) => {
  return (
    <div className="imageDetailsDrawer" style={{ width: "40%" }}>
      <div className="imageDetailsDrawerImageContainer">
        <div className="closeButton" onClick={closeDrawer}></div>
        <img
          className="drawerImage"
          src={imageDrawer.webformatURL}
          alt="preview"
        />
      </div>
      <div className="imageDrawerDetailsContainer">
        <div className="imageDrawerDetailsRow">
          <p>
            <span style={{ fontWeight: "bold" }}>Photo by:</span>{" "}
            {imageDrawer.user}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Tags:</span> {imageDrawer.tags}
          </p>
        </div>
        <div className="imageDrawerDetailsRow">
          <p>
            <ThumbUpAltIcon /> {"   "} {imageDrawer.likes}
          </p>
          <p>
            <FavoriteIcon /> {"   "} {imageDrawer.favorites}
          </p>
          <p>
            <VisibilityIcon /> {"   "} {imageDrawer.views}
          </p>
          <p>
            Downloaded{" "}
            <span style={{ fontWeight: "bold" }}>{imageDrawer.downloads}</span>{" "}
            times
          </p>
          <p>
            <CommentIcon /> {"   "} {imageDrawer.comments}
          </p>
        </div>
        <div className="imageDrawerDetailsRow">
          <a
            className="downloadImageLink"
            href={imageDrawer.largeImageURL}
            download
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="contained" color="primary">
              Download in Full size ({imageDrawer.imageWidth} X{" "}
              {imageDrawer.imageHeight}) <GetAppIcon />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailsDrawer;
