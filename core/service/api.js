const APIURL = 'https://api.investtair.com/api';  // 线上域名

const request = (requestHandler) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: APIURL + requestHandler.url,
      method: requestHandler.method,
      data: requestHandler.data,
      header: Object.assign(
				{'Content-Type': 'application/json'},
				requestHandler.header
			),
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				// 统一错误提示啥的 后面看情况写写吧
				reject(err)
			}
    })
  })
}

// 数据拦截
uni.addInterceptor('request', {
  success(args) {
		const { statusCode, header, data } = args;
		if ([200].includes(statusCode)) {
			if ([200].includes(data.code)) {
				args.data = data.data; // 请求成功，去除多余的代码
			} else {
				uni.showToast({
					title: data.msg,
					icon: 'error',
					duration: 2000
				})
				args.hasError = true;
			}
		} else {
			uni.showToast({
				title: `网络错误：${statusCode}`,
				icon: 'error',
				duration: 2000
			})
		}
  }, 
  fail(err) {
    console.log('interceptor-fail')
  }, 
  complete(res) {
    console.log('interceptor-complete')
  }
})

export default  {
	// 登录
	loginIn (code, nickName, avatarUrl, gender) {
		return request({
			url: '/auth/login',
			method: "POST",
			data: {
				code,
				nickName,
				avatarUrl,
				gender
			}
		})
	},
	// 获取留言列表
	fetchMessageList ({ page = 1, pageSize = 10, proId = 1 }, options) {
		return request({
			url: '/project/messageList',
			method: "GET",
			data: {
				page,
				page_size: pageSize,
				pro_id: proId
			},
			header: options.header
		})
	},
	// 添加留言
	storeMessage ({ message = '', proId = 1 }, options) {
		return request({
			url: '/project/addProMessage',
			method: "POST",
			data: {
				pro_id: proId,
				content: message
			},
			header: options.header
		})
	},
	// 获取是否提交
	fetchConfig ({ proId = 1 }, options) {
		return request({
			url: '/project/isSubmit',
			method: "GET",
			data: {
				pro_id: proId
			},
			header: options.header
		})
	},
	// 合作意向
	storeCompanyCoperation ({name, phone, company, departmentPosition, proId = 1}, options) {
		return request({
			url: '/project/addProIntroducePurpose',
			method: "POST",
			data: {
				name,
				phone,
				company,
				department_position: departmentPosition,
				pro_id: proId
			},
			header: options.header
		})
	},
	// 参与招商
	storeCompanyBusiness ({ brandName, city, name, position, phone, content, proId = 1 }, options) {
		return request({
			url: '/project/addProHotPurpose',
			method: "POST",
			data: {
				city,
				name,
				phone,
				position,
				brand_name: brandName,
				pro_id: proId,
				content
			},
			header: options.header
		})
	},
	// 关注项目
	focusProject ({proId = 1}, options) {
		return request({
			url: '/project/follow',
			method: "POST",
			data: {
				pro_id: proId
			},
			header: options.header
		})
	},
	// 火热招商轮播
	fetchHotUserJoin ({}, options) {
		return request({
			url: '/project/hotList',
			method: "GET",
			header: options.header
		})
	}
}