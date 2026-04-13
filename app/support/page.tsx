export default function SupportPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">支持中心</h1>
          <p className="text-xl text-gray-600">我们随时为您提供帮助</p>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">常见问题</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                如何开始游戏？
              </h3>
              <p className="text-gray-600">
                下载并安装游戏后，点击图标即可启动。首次进入会有简单的新手引导，帮助您快速了解游戏玩法。
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                游戏需要网络连接吗？
              </h3>
              <p className="text-gray-600">
                不需要。游戏支持完全离线游玩，您可以随时随地享受游戏，无需担心网络问题。
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                如何保存游戏进度？
              </h3>
              <p className="text-gray-600">
                游戏会自动保存您的进度。每次完成关卡或退出游戏时，进度都会自动保存到您的设备上。
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                游戏支持哪些设备？
              </h3>
              <p className="text-gray-600">
                游戏支持 iOS 14.0 及以上版本的 iPhone、iPad 和 iPod touch 设备。
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                如何恢复购买？
              </h3>
              <p className="text-gray-600">
                如果您更换了设备或重新安装了游戏，可以在设置中点击"恢复购买"按钮，系统会自动恢复您之前的购买记录。
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                遇到技术问题怎么办？
              </h3>
              <p className="text-gray-600">
                如果遇到任何技术问题，请尝试重启游戏或设备。如果问题仍然存在，请通过下方的联系方式与我们联系。
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">联系我们</h2>
          <p className="text-gray-600 mb-8">
            没有找到您需要的答案？请填写下方表单，我们会尽快回复您。
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                姓名
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="请输入您的姓名"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                邮箱地址
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                主题
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option>技术支持</option>
                <option>账号问题</option>
                <option>购买咨询</option>
                <option>功能建议</option>
                <option>其他问题</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                详细描述
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="请详细描述您的问题或建议..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              提交
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              或直接发送邮件至：
              <a href="mailto:support@yourgame.com" className="text-indigo-600 hover:text-indigo-700 font-medium ml-2">
                support@yourgame.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
