export default function TailCard({ imgSrc, title, subtitle, tags }) {
    let sps = tags.split(',') ;

    sps = sps.map((item, idx) => 
      <span key={`sp${idx}`} className="inline-block bg-lime-200 rounded-full px-3 py-1 text-sm font-semibold text-violet-700 mr-2 mb-2">
        {item}
      </span>
    )

    sps.length === 0 ? '' : sps

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imgSrc} alt={title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
              {subtitle}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {sps}          
          </div>
      </div>
    )
  }
