import './App.css';
import NpxScale from './Components/npx/npx';

function RatingScale({
  workspace_id,
  username,
  scale_id,
  buttonColor,
  scale_type,
}) {
  return (
    <div className="container">
      {scale_type === 'nps' && (
        <NpxScale
          workspace_id={workspace_id}
          username={username}
          scale_id={scale_id}
          buttonColor={buttonColor}
        />
      )}
    </div>
  );
}

export default RatingScale;
