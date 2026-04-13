export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">隐私政策</h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p className="text-sm text-gray-500">最后更新日期：2026年4月13日</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. 引言</h2>
            <p>
              欢迎使用我们的游戏（以下简称"本游戏"）。我们非常重视您的隐私保护和个人信息安全。
              本隐私政策旨在向您说明我们如何收集、使用、存储和保护您的个人信息，以及您享有的相关权利。
            </p>
            <p>
              请您在使用本游戏前仔细阅读并充分理解本隐私政策。如果您不同意本隐私政策的任何内容，
              请您立即停止使用本游戏。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. 我们收集的信息</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 您主动提供的信息</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>当您通过客服渠道联系我们时，您可能会提供姓名、邮箱地址等联系信息</li>
              <li>当您参与游戏内活动或调查时，您可能会提供相关反馈信息</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 自动收集的信息</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>设备信息：</strong>设备型号、操作系统版本、设备标识符（IDFA/IDFV）、屏幕分辨率</li>
              <li><strong>游戏数据：</strong>游戏进度、关卡完成情况、游戏时长、游戏内行为数据</li>
              <li><strong>日志信息：</strong>应用崩溃日志、错误报告、性能数据</li>
              <li><strong>网络信息：</strong>IP地址、网络类型（WiFi/移动网络）</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 第三方SDK收集的信息</h3>
            <p>为了提供更好的服务，我们可能会使用以下第三方服务：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>广告服务（如适用）：</strong>可能收集设备标识符（IDFA）、广告点击数据、广告展示数据</li>
              <li><strong>数据分析服务：</strong>可能收集设备信息、使用统计数据、崩溃报告</li>
              <li><strong>支付服务：</strong>通过 Apple App Store 处理，我们不会直接收集您的支付信息</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. 信息使用目的</h2>
            <p>我们收集和使用您的个人信息用于以下目的：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>提供游戏服务：</strong>保存游戏进度、实现游戏功能、优化游戏体验</li>
              <li><strong>改进产品：</strong>分析用户行为、优化游戏设计、修复bug、提升性能</li>
              <li><strong>客户支持：</strong>响应您的咨询和反馈、解决技术问题</li>
              <li><strong>广告投放（如适用）：</strong>展示个性化广告、衡量广告效果</li>
              <li><strong>安全保障：</strong>检测和防止欺诈行为、保护账号安全</li>
              <li><strong>法律合规：</strong>遵守适用的法律法规要求</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. 信息共享与披露</h2>
            <p>我们不会出售您的个人信息。我们仅在以下情况下共享您的信息：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>第三方服务提供商：</strong>与我们合作的广告、分析、云存储服务商，他们仅能在提供服务所需的范围内访问信息</li>
              <li><strong>法律要求：</strong>根据法律法规、法律程序、诉讼或政府机关的强制性要求</li>
              <li><strong>业务转让：</strong>在合并、收购或资产出售的情况下，您的信息可能会被转让</li>
              <li><strong>征得您的同意：</strong>在获得您明确同意的其他情况下</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. 信息存储与安全</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 存储位置</h3>
            <p>
              您的游戏数据主要存储在您的本地设备上。部分数据可能会存储在我们的服务器或第三方云服务提供商的服务器上，
              服务器可能位于中国境内或境外。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2 存储期限</h3>
            <p>
              我们仅在实现本隐私政策所述目的所需的期限内保留您的个人信息。当您删除游戏或请求删除数据后，
              我们会在合理期限内删除或匿名化您的个人信息，除非法律要求我们保留更长时间。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.3 安全措施</h3>
            <p>
              我们采取行业标准的安全措施保护您的个人信息，包括数据加密、访问控制、安全审计等。
              但请理解，没有任何安全措施是绝对安全的。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. 您的权利</h2>
            <p>根据适用的法律法规，您享有以下权利：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>访问权：</strong>您有权访问我们持有的关于您的个人信息</li>
              <li><strong>更正权：</strong>您有权要求更正不准确或不完整的个人信息</li>
              <li><strong>删除权：</strong>您有权要求删除您的个人信息</li>
              <li><strong>撤回同意：</strong>您有权随时撤回您对个人信息处理的同意</li>
              <li><strong>数据可携带权：</strong>您有权获取您的个人信息副本</li>
              <li><strong>拒绝权：</strong>您有权拒绝某些个人信息处理活动</li>
            </ul>
            <p className="mt-4">
              如需行使上述权利，请通过本隐私政策底部的联系方式与我们联系。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. 儿童隐私保护</h2>
            <p>
              我们非常重视儿童的隐私保护。本游戏适合4岁及以上用户使用。我们不会故意收集13岁以下儿童的个人信息。
              如果您是家长或监护人，发现您的孩子在未经您同意的情况下向我们提供了个人信息，请联系我们，
              我们会尽快删除相关信息。
            </p>
            <p className="mt-4">
              根据《儿童在线隐私保护法》（COPPA）和《通用数据保护条例》（GDPR）的要求，
              如果您未满相应年龄，请在家长或监护人的指导下使用本游戏。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. 广告标识符（IDFA）</h2>
            <p>
              如果本游戏包含广告功能，我们可能会收集您的广告标识符（IDFA）用于展示个性化广告。
              您可以在 iOS 设备的"设置 &gt; 隐私 &gt; 跟踪"中选择关闭广告跟踪。
            </p>
            <p className="mt-4">
              根据 Apple 的 App Tracking Transparency（ATT）框架，我们会在收集 IDFA 前征得您的明确同意。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. 国际数据传输</h2>
            <p>
              如果您位于欧洲经济区（EEA）、英国或其他对数据传输有特殊要求的地区，
              请注意您的个人信息可能会被传输到您所在国家/地区以外的地方。
              我们会采取适当措施确保您的个人信息在传输过程中得到充分保护，
              包括使用标准合同条款、数据传输协议等。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. 隐私政策的变更</h2>
            <p>
              我们可能会不时更新本隐私政策。当我们对隐私政策进行重大变更时，
              我们会通过游戏内通知、电子邮件或其他适当方式通知您。
              变更后的隐私政策将在发布后立即生效。
            </p>
            <p className="mt-4">
              我们建议您定期查看本隐私政策以了解最新信息。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. 适用法律</h2>
            <p>
              本隐私政策的解释、执行和争议解决适用中华人民共和国法律（不包括冲突法规则）。
              如果您位于其他国家/地区，我们也会遵守当地适用的隐私法律法规，
              包括但不限于欧盟《通用数据保护条例》（GDPR）、美国《加州消费者隐私法案》（CCPA）等。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. 联系我们</h2>
            <p>
              如果您对本隐私政策有任何疑问、意见或建议，或需要行使您的权利，请通过以下方式联系我们：
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mt-4">
              <p><strong>邮箱：</strong><a href="mailto:support@yourgame.com" className="text-indigo-600 hover:text-indigo-700">support@yourgame.com</a></p>
              <p className="mt-2"><strong>公司名称：</strong>Shenyang Time Acceleration Technology Co., Ltd.</p>
              <p className="mt-2"><strong>注册地址：</strong>Workstation 0436, Room 203, No. 41-1 Chuangxin 2nd Road, Shenyang Area of China (Liaoning) Pilot Free Trade Zone</p>
            </div>
            <p className="mt-4">
              我们会在收到您的请求后15个工作日内予以回复。
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-500">
              本隐私政策是根据《中华人民共和国个人信息保护法》、欧盟《通用数据保护条例》（GDPR）、
              美国《儿童在线隐私保护法》（COPPA）等相关法律法规制定的。
            </p>
            <p className="text-sm text-gray-500 mt-4">
              <strong>重要提示：</strong>本隐私政策为模板示例，实际使用时请根据您的游戏实际情况进行修改，
              特别是第三方SDK、数据收集范围、广告功能等部分。建议咨询法律顾问以确保合规。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
