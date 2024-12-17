/** @type {import('next').NextConfig} */
const nextConfig = {
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
};

export default nextConfig;
