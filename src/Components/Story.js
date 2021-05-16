const Story = ({ title, body, time, commentsCount, storyType }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text truncate">{body}</p>
        <p className="card-footer">
          <span>{time}</span>
          {storyType !== 'job' &&
            <span>{commentsCount} Comment{commentsCount === 1 ? '': 's'}</span>}
        </p>
      </div>
    </div>
  )
}

export default Story
