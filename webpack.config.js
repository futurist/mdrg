var path =require('path')

module.exports = {
	entry:{ index:'index_src.html' },
	output:{ path:__dirname, filename:'[name].html' },
	module:{
		loaders:[
			{
				test:'index_src.html',
				exclude: /(node_modules|bower_components)/,
				loader:'string-replace',
				query:{
					multiple:[
						{search:'m_drag.js', replace: 'm_drag.js?'+Math.random() },
					]
				}
			},
		]
	}
}
