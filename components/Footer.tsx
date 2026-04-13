import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">Snake Jam</h3>
            <p className="text-gray-400 mb-4">
              Slide the blocks and help the snake slither to freedom in this addictive puzzle escape!
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition">
                  支持
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  用户协议
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@yourgame.com" className="hover:text-white transition">
                  support@yourgame.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shenyang Time Acceleration Technology Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
