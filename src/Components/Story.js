const Story = ({ heading, content, time, commentsCount, storyType }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{heading}</h5>
        <p className="card-text truncate">{content}</p>
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
