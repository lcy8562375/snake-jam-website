export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">用户协议</h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p className="text-sm text-gray-500">最后更新日期：2026年4月13日</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. 协议的接受</h2>
            <p>
              欢迎使用我们的游戏（以下简称"本游戏"或"本服务"）。本用户协议（以下简称"本协议"）
              是您与游戏公司名称（以下简称"我们"或"本公司"）之间关于使用本游戏的法律协议。
            </p>
            <p>
              通过下载、安装、访问或使用本游戏，即表示您已阅读、理解并同意接受本协议的所有条款和条件。
              如果您不同意本协议的任何内容，请立即停止使用本游戏。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. 服务说明</h2>
            <p>
              本游戏是一款休闲益智类移动游戏，为用户提供娱乐和休闲体验。我们保留随时修改、暂停或终止
              本游戏全部或部分功能的权利，恕不另行通知。
            </p>
            <p className="mt-4">
              我们会尽力确保游戏的稳定运行，但不保证服务不会中断或完全没有错误。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. 账号与安全</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 账号注册</h3>
            <p>
              本游戏可能不需要注册账号即可使用。如果需要账号，您需要提供真实、准确、完整的信息，
              并及时更新以保持信息的准确性。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 账号安全</h3>
            <p>
              您有责任维护账号的安全性和保密性。您对使用您的账号进行的所有活动负责。
              如果您发现账号被未经授权使用，请立即通知我们。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3 账号限制</h3>
            <p>
              每个用户只能注册和使用一个账号。禁止出售、转让、出租或以其他方式分享账号。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. 用户行为规范</h2>
            <p>在使用本游戏时，您同意遵守以下规范：</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 禁止行为</h3>
            <p>您不得从事以下行为：</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>使用外挂、作弊软件、修改器或其他未经授权的第三方工具</li>
              <li>利用游戏漏洞或bug获取不正当利益</li>
              <li>干扰或破坏游戏服务器或网络</li>
              <li>反向工程、反编译或试图提取游戏源代码</li>
              <li>发布、传播违法、有害、威胁、辱骂、骚扰、侵权或不当的内容</li>
              <li>冒充他人或虚假陈述与他人的关系</li>
              <li>侵犯他人的知识产权或其他合法权益</li>
              <li>从事任何违反法律法规的行为</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 违规处理</h3>
            <p>
              如果您违反本协议，我们有权采取以下措施，包括但不限于：
              警告、限制功能、暂停账号、永久封禁账号、删除违规内容、追究法律责任。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. 知识产权</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 游戏内容</h3>
            <p>
              本游戏及其所有内容（包括但不限于文字、图片、音频、视频、软件代码、界面设计、商标、Logo）
              的知识产权均归本公司或相关权利人所有，受著作权法、商标法及其他知识产权法律法规的保护。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2 使用许可</h3>
            <p>
              我们授予您有限的、非独占的、不可转让的、可撤销的许可，仅供您个人、非商业性地使用本游戏。
              未经我们书面许可，您不得将游戏内容用于任何商业目的。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.3 用户内容</h3>
            <p>
              如果您在游戏中创建、上传或分享任何内容（如反馈、建议等），您授予我们免费的、永久的、
              不可撤销的、全球范围内的许可，以使用、复制、修改、发布和展示该内容。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. 虚拟物品与购买</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 虚拟物品</h3>
            <p>
              游戏中可能包含虚拟货币、道具或其他虚拟物品（统称"虚拟物品"）。
              虚拟物品没有现实世界的货币价值，不能兑换成现金或其他有价物品。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.2 应用内购买</h3>
            <p>
              如果游戏提供应用内购买功能，所有购买均通过 Apple App Store 处理。
              购买完成后，虚拟物品将添加到您的游戏账号中。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.3 退款政策</h3>
            <p>
              所有购买均为最终交易，除非法律另有规定或我们自行决定，否则不予退款。
              如需申请退款，请联系 Apple App Store 客服。
            </p>
            <p className="mt-4">
              根据中国《消费者权益保护法》，如果虚拟物品存在质量问题或与描述不符，
              您有权在购买后7日内要求退款。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. 免责声明</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.1 服务"按原样"提供</h3>
            <p>
              本游戏按"原样"和"可用"基础提供，不提供任何明示或暗示的保证，
              包括但不限于适销性、特定用途适用性、不侵权的保证。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.2 责任限制</h3>
            <p>
              在法律允许的最大范围内，我们不对以下情况承担责任：
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>因使用或无法使用本游戏而导致的任何直接、间接、偶然、特殊或后果性损害</li>
              <li>数据丢失、利润损失、业务中断或其他商业损害</li>
              <li>第三方的行为或内容</li>
              <li>不可抗力事件（如自然灾害、战争、政府行为等）</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.3 赔偿</h3>
            <p>
              您同意赔偿并使我们免受因您违反本协议或使用本游戏而产生的任何索赔、损失、责任、
              费用（包括合理的律师费）的损害。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. 隐私保护</h2>
            <p>
              我们重视您的隐私。关于我们如何收集、使用和保护您的个人信息，
              请参阅我们的<a href="/privacy" className="text-indigo-600 hover:text-indigo-700 font-medium">隐私政策</a>。
              隐私政策是本协议的组成部分。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. 协议的变更</h2>
            <p>
              我们保留随时修改本协议的权利。当我们对协议进行重大变更时，
              我们会通过游戏内通知、电子邮件或其他适当方式通知您。
            </p>
            <p className="mt-4">
              变更后的协议将在发布后立即生效。如果您在协议变更后继续使用本游戏，
              即表示您接受变更后的协议。如果您不同意变更，请停止使用本游戏。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. 服务的终止</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.1 您的终止权</h3>
            <p>
              您可以随时停止使用本游戏并删除应用程序来终止本协议。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.2 我们的终止权</h3>
            <p>
              我们可以随时暂停或终止您对本游戏的访问，原因包括但不限于：
              违反本协议、从事非法活动、长期不活跃、服务终止。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.3 终止后果</h3>
            <p>
              协议终止后，您使用本游戏的权利立即终止。您的游戏数据和虚拟物品可能会被删除，
              且不予退款。本协议中应当在终止后继续有效的条款将继续有效。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. 争议解决</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11.1 适用法律</h3>
            <p>
              本协议的订立、执行、解释及争议解决均适用中华人民共和国法律（不包括冲突法规则）。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11.2 争议解决方式</h3>
            <p>
              因本协议引起的或与本协议有关的任何争议，双方应首先通过友好协商解决。
              协商不成的，任何一方均可向本公司所在地有管辖权的人民法院提起诉讼。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11.3 可分割性</h3>
            <p>
              如果本协议的任何条款被认定为无效或不可执行，该条款应在必要范围内进行修改，
              以使其有效和可执行，或如果无法修改，则应从本协议中删除，
              但不影响本协议其他条款的有效性和可执行性。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. 其他条款</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12.1 完整协议</h3>
            <p>
              本协议（包括隐私政策）构成您与我们之间关于本游戏的完整协议，
              取代之前的所有口头或书面协议。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12.2 不放弃权利</h3>
            <p>
              我们未行使或延迟行使本协议项下的任何权利或救济，不构成对该权利或救济的放弃。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12.3 转让</h3>
            <p>
              未经我们事先书面同意，您不得转让本协议项下的权利或义务。
              我们可以自由转让本协议项下的权利和义务。
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12.4 语言</h3>
            <p>
              本协议以中文撰写。如有其他语言版本，以中文版本为准。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. 联系我们</h2>
            <p>
              如果您对本协议有任何疑问或需要进一步信息，请通过以下方式联系我们：
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mt-4">
              <p><strong>邮箱：</strong><a href="mailto:contact@timeaccel.com" className="text-indigo-600 hover:text-indigo-700">contact@timeaccel.com</a></p>
              <p className="mt-2"><strong>公司名称：</strong>Shenyang Time Acceleration Technology Co., Ltd.</p>
              <p className="mt-2"><strong>注册地址：</strong>Workstation 0436, Room 203, No. 41-1 Chuangxin 2nd Road, Shenyang Area of China (Liaoning) Pilot Free Trade Zone</p>
            </div>
          </section>

          <section className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-500">
              <strong>重要提示：</strong>本用户协议为模板示例，实际使用时请根据您的游戏实际情况进行修改，
              特别是虚拟物品、购买政策、年龄限制等部分。建议咨询法律顾问以确保合规。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
