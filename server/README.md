## Project issues
### 1. Circular dependency(순환 참조, 순환 종속성)
- A 클래스에서 B 클래스를 호출하고, B 클래스에서 A 클래스를 호출 => 순환 종속성
- Nest에서 Forward referencing(전방 참조)을 사용해 해결 가능
- ModuleRef 클래스를 사용해 DI Container 에서 Provider 를 검색

> **_barrel files_**
> loader, exporter 등 로더 파일을 barrel 파일이라 부른다.
> Nest에서 barrel 파일을 통해 Module, Provider 클래스를 호출하지 말라고 함
> barrel 파일과 동일한 경로 내에서 파일 import 금지

References
- https://docs.nestjs.com/fundamentals/circular-dependency
- https://github.com/nestjs/nest/issues/1181