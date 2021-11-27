// 工具库

function promiseTry(func) {
	return new Promise(function(resolve, reject) {
		resolve(func());
	});
}
function flow(...funcs) {
  const length = funcs.length
  let index = length
  while (index--) {
    if (typeof funcs[index] !== 'function') {
      throw new TypeError('Expected a function')
    }
  }
  return function(...args) {
    let index = 0
    let result = length ? funcs[index].apply(this, args) : args[0]
    while (++index < length) {
      result = funcs[index].call(this, result)
    }
    return result
  }
}

function asyncFlow (...fns) {
	const wrap = (fn) => (arg) => {
	  return promiseTry(() => arg).then(fn)
	}
	const wrappedFns = fns.map(fn => wrap(fn))
	return flow(...wrappedFns)
}

function uniPromise(callback) {
	return (obj) => {
		!obj && (obj = {});
		return new Promise((resolve, reject) => {
			obj.success = (...args) => {
				resolve(...args)
			};
			obj.fail = (...args) => {
				reject(...args)
			};
			obj.complete = () => {}
			callback(obj)
		})
	}
}

function getUserInfo (targetUrl) {
	const { globalData } = getApp();
	if (globalData.userInfo) {
		return globalData.userInfo;
	} else {
		uni.navigateTo({
			url: `/pages/auth/index?targetUrl=${targetUrl}`
		})
	}
}

export const util = {
	flow,
	asyncFlow,
	uniPromise,
	getUserInfo
}

export default (Vue) => {
	Vue.prototype.$util = util
}
