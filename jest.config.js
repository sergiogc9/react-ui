process.env.TZ = 'UTC';

module.exports = {
	roots: ['<rootDir>/packages/collections/src', '<rootDir>/packages/components/src', '<rootDir>/packages/theme/src'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', 'jest-styled-components', './jest.setup.js'],
	testRegex: '.*.test.(ts|tsx)?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'^collections/(.*)': '<rootDir>/packages/collections/src/$1',
		'^components/(.*)': '<rootDir>/packages/components/src/$1',
		'^theme/(.*)': '<rootDir>/packages/theme/src/$1',
		'^react$': '<rootDir>/node_modules/react',
		'^react-dom$': '<rootDir>/node_modules/react-dom'
	},
	coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary', 'cobertura'],
	collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*/private/utils/tests/**/*', '!**/*/index.ts'],
	coverageThreshold: {
		global: {
			statements: 0,
			branches: 0,
			functions: 0,
			lines: 0
		}
	}
};
