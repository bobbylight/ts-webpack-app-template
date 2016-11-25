import {Ghost} from './Ghost';
describe('Ghost', () => {

	class GhostImpl extends Ghost {

		getValue(): number {
			return 0;
		}
	}

	it('should allow oncrete subclasses', () => {
		const ghost: Ghost = new GhostImpl();
		expect(ghost.getValue()).toEqual(0);
	});
});
